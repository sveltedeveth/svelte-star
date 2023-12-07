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
export type GiCornucopiaProps = typeof __propDef.props;
export type GiCornucopiaEvents = typeof __propDef.events;
export type GiCornucopiaSlots = typeof __propDef.slots;
export default class GiCornucopia extends SvelteComponentTyped<GiCornucopiaProps, GiCornucopiaEvents, GiCornucopiaSlots> {
}
export {};
