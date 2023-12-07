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
export type IoMdColorFilterProps = typeof __propDef.props;
export type IoMdColorFilterEvents = typeof __propDef.events;
export type IoMdColorFilterSlots = typeof __propDef.slots;
export default class IoMdColorFilter extends SvelteComponentTyped<IoMdColorFilterProps, IoMdColorFilterEvents, IoMdColorFilterSlots> {
}
export {};
