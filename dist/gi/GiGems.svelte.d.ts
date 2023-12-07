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
export type GiGemsProps = typeof __propDef.props;
export type GiGemsEvents = typeof __propDef.events;
export type GiGemsSlots = typeof __propDef.slots;
export default class GiGems extends SvelteComponentTyped<GiGemsProps, GiGemsEvents, GiGemsSlots> {
}
export {};
