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
export type GiBlackBarProps = typeof __propDef.props;
export type GiBlackBarEvents = typeof __propDef.events;
export type GiBlackBarSlots = typeof __propDef.slots;
export default class GiBlackBar extends SvelteComponentTyped<GiBlackBarProps, GiBlackBarEvents, GiBlackBarSlots> {
}
export {};
