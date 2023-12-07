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
export type GiButterProps = typeof __propDef.props;
export type GiButterEvents = typeof __propDef.events;
export type GiButterSlots = typeof __propDef.slots;
export default class GiButter extends SvelteComponentTyped<GiButterProps, GiButterEvents, GiButterSlots> {
}
export {};
