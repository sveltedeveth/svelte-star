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
export type FaSnowplowProps = typeof __propDef.props;
export type FaSnowplowEvents = typeof __propDef.events;
export type FaSnowplowSlots = typeof __propDef.slots;
export default class FaSnowplow extends SvelteComponentTyped<FaSnowplowProps, FaSnowplowEvents, FaSnowplowSlots> {
}
export {};
