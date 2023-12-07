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
export type MdBeenhereProps = typeof __propDef.props;
export type MdBeenhereEvents = typeof __propDef.events;
export type MdBeenhereSlots = typeof __propDef.slots;
export default class MdBeenhere extends SvelteComponentTyped<MdBeenhereProps, MdBeenhereEvents, MdBeenhereSlots> {
}
export {};
