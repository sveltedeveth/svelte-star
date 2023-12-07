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
export type GiTeePipeProps = typeof __propDef.props;
export type GiTeePipeEvents = typeof __propDef.events;
export type GiTeePipeSlots = typeof __propDef.slots;
export default class GiTeePipe extends SvelteComponentTyped<GiTeePipeProps, GiTeePipeEvents, GiTeePipeSlots> {
}
export {};
