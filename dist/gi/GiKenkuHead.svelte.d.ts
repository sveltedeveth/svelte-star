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
export type GiKenkuHeadProps = typeof __propDef.props;
export type GiKenkuHeadEvents = typeof __propDef.events;
export type GiKenkuHeadSlots = typeof __propDef.slots;
export default class GiKenkuHead extends SvelteComponentTyped<GiKenkuHeadProps, GiKenkuHeadEvents, GiKenkuHeadSlots> {
}
export {};
