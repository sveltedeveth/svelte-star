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
export type IoMdExitProps = typeof __propDef.props;
export type IoMdExitEvents = typeof __propDef.events;
export type IoMdExitSlots = typeof __propDef.slots;
export default class IoMdExit extends SvelteComponentTyped<IoMdExitProps, IoMdExitEvents, IoMdExitSlots> {
}
export {};
