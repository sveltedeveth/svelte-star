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
export type GiVultureProps = typeof __propDef.props;
export type GiVultureEvents = typeof __propDef.events;
export type GiVultureSlots = typeof __propDef.slots;
export default class GiVulture extends SvelteComponentTyped<GiVultureProps, GiVultureEvents, GiVultureSlots> {
}
export {};
