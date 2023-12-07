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
export type GiItaliaProps = typeof __propDef.props;
export type GiItaliaEvents = typeof __propDef.events;
export type GiItaliaSlots = typeof __propDef.slots;
export default class GiItalia extends SvelteComponentTyped<GiItaliaProps, GiItaliaEvents, GiItaliaSlots> {
}
export {};
