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
export type IoMdCodeProps = typeof __propDef.props;
export type IoMdCodeEvents = typeof __propDef.events;
export type IoMdCodeSlots = typeof __propDef.slots;
export default class IoMdCode extends SvelteComponentTyped<IoMdCodeProps, IoMdCodeEvents, IoMdCodeSlots> {
}
export {};
