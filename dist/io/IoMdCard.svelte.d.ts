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
export type IoMdCardProps = typeof __propDef.props;
export type IoMdCardEvents = typeof __propDef.events;
export type IoMdCardSlots = typeof __propDef.slots;
export default class IoMdCard extends SvelteComponentTyped<IoMdCardProps, IoMdCardEvents, IoMdCardSlots> {
}
export {};
