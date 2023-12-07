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
export type GiBastetProps = typeof __propDef.props;
export type GiBastetEvents = typeof __propDef.events;
export type GiBastetSlots = typeof __propDef.slots;
export default class GiBastet extends SvelteComponentTyped<GiBastetProps, GiBastetEvents, GiBastetSlots> {
}
export {};
