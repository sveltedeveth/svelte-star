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
export type GiPretzelProps = typeof __propDef.props;
export type GiPretzelEvents = typeof __propDef.events;
export type GiPretzelSlots = typeof __propDef.slots;
export default class GiPretzel extends SvelteComponentTyped<GiPretzelProps, GiPretzelEvents, GiPretzelSlots> {
}
export {};
