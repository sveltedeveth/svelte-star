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
export type GiAnimalSkullProps = typeof __propDef.props;
export type GiAnimalSkullEvents = typeof __propDef.events;
export type GiAnimalSkullSlots = typeof __propDef.slots;
export default class GiAnimalSkull extends SvelteComponentTyped<GiAnimalSkullProps, GiAnimalSkullEvents, GiAnimalSkullSlots> {
}
export {};
