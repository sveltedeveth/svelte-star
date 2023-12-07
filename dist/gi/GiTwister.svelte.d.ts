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
export type GiTwisterProps = typeof __propDef.props;
export type GiTwisterEvents = typeof __propDef.events;
export type GiTwisterSlots = typeof __propDef.slots;
export default class GiTwister extends SvelteComponentTyped<GiTwisterProps, GiTwisterEvents, GiTwisterSlots> {
}
export {};
