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
export type GiHopsProps = typeof __propDef.props;
export type GiHopsEvents = typeof __propDef.events;
export type GiHopsSlots = typeof __propDef.slots;
export default class GiHops extends SvelteComponentTyped<GiHopsProps, GiHopsEvents, GiHopsSlots> {
}
export {};
