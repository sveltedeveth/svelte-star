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
export type MdMotorcycleProps = typeof __propDef.props;
export type MdMotorcycleEvents = typeof __propDef.events;
export type MdMotorcycleSlots = typeof __propDef.slots;
export default class MdMotorcycle extends SvelteComponentTyped<MdMotorcycleProps, MdMotorcycleEvents, MdMotorcycleSlots> {
}
export {};
