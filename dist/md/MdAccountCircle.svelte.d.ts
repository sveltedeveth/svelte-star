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
export type MdAccountCircleProps = typeof __propDef.props;
export type MdAccountCircleEvents = typeof __propDef.events;
export type MdAccountCircleSlots = typeof __propDef.slots;
export default class MdAccountCircle extends SvelteComponentTyped<MdAccountCircleProps, MdAccountCircleEvents, MdAccountCircleSlots> {
}
export {};
