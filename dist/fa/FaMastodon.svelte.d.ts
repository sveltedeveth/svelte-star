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
export type FaMastodonProps = typeof __propDef.props;
export type FaMastodonEvents = typeof __propDef.events;
export type FaMastodonSlots = typeof __propDef.slots;
export default class FaMastodon extends SvelteComponentTyped<FaMastodonProps, FaMastodonEvents, FaMastodonSlots> {
}
export {};
