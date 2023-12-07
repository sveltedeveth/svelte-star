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
export type GiHillsProps = typeof __propDef.props;
export type GiHillsEvents = typeof __propDef.events;
export type GiHillsSlots = typeof __propDef.slots;
export default class GiHills extends SvelteComponentTyped<GiHillsProps, GiHillsEvents, GiHillsSlots> {
}
export {};
