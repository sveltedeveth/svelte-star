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
export type MdSystemUpdateProps = typeof __propDef.props;
export type MdSystemUpdateEvents = typeof __propDef.events;
export type MdSystemUpdateSlots = typeof __propDef.slots;
export default class MdSystemUpdate extends SvelteComponentTyped<MdSystemUpdateProps, MdSystemUpdateEvents, MdSystemUpdateSlots> {
}
export {};
