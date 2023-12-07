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
export type GiSaiyanSuitProps = typeof __propDef.props;
export type GiSaiyanSuitEvents = typeof __propDef.events;
export type GiSaiyanSuitSlots = typeof __propDef.slots;
export default class GiSaiyanSuit extends SvelteComponentTyped<GiSaiyanSuitProps, GiSaiyanSuitEvents, GiSaiyanSuitSlots> {
}
export {};
