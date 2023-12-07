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
export type MdUpdateProps = typeof __propDef.props;
export type MdUpdateEvents = typeof __propDef.events;
export type MdUpdateSlots = typeof __propDef.slots;
export default class MdUpdate extends SvelteComponentTyped<MdUpdateProps, MdUpdateEvents, MdUpdateSlots> {
}
export {};
