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
export type IoMdBodyProps = typeof __propDef.props;
export type IoMdBodyEvents = typeof __propDef.events;
export type IoMdBodySlots = typeof __propDef.slots;
export default class IoMdBody extends SvelteComponentTyped<IoMdBodyProps, IoMdBodyEvents, IoMdBodySlots> {
}
export {};
