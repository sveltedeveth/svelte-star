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
export type MdCodeProps = typeof __propDef.props;
export type MdCodeEvents = typeof __propDef.events;
export type MdCodeSlots = typeof __propDef.slots;
export default class MdCode extends SvelteComponentTyped<MdCodeProps, MdCodeEvents, MdCodeSlots> {
}
export {};
