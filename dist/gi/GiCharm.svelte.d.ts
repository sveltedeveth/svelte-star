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
export type GiCharmProps = typeof __propDef.props;
export type GiCharmEvents = typeof __propDef.events;
export type GiCharmSlots = typeof __propDef.slots;
export default class GiCharm extends SvelteComponentTyped<GiCharmProps, GiCharmEvents, GiCharmSlots> {
}
export {};
