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
export type GiSonicShoutProps = typeof __propDef.props;
export type GiSonicShoutEvents = typeof __propDef.events;
export type GiSonicShoutSlots = typeof __propDef.slots;
export default class GiSonicShout extends SvelteComponentTyped<GiSonicShoutProps, GiSonicShoutEvents, GiSonicShoutSlots> {
}
export {};
