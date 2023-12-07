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
export type GiForearmProps = typeof __propDef.props;
export type GiForearmEvents = typeof __propDef.events;
export type GiForearmSlots = typeof __propDef.slots;
export default class GiForearm extends SvelteComponentTyped<GiForearmProps, GiForearmEvents, GiForearmSlots> {
}
export {};
