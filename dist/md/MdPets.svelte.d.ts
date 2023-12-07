import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdPetsProps = typeof __propDef.props;
export type MdPetsEvents = typeof __propDef.events;
export type MdPetsSlots = typeof __propDef.slots;
export default class MdPets extends SvelteComponentTyped<MdPetsProps, MdPetsEvents, MdPetsSlots> {
}
export {};
