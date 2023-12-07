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
export type MdAddCircleProps = typeof __propDef.props;
export type MdAddCircleEvents = typeof __propDef.events;
export type MdAddCircleSlots = typeof __propDef.slots;
export default class MdAddCircle extends SvelteComponentTyped<MdAddCircleProps, MdAddCircleEvents, MdAddCircleSlots> {
}
export {};
