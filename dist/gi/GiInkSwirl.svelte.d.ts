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
export type GiInkSwirlProps = typeof __propDef.props;
export type GiInkSwirlEvents = typeof __propDef.events;
export type GiInkSwirlSlots = typeof __propDef.slots;
export default class GiInkSwirl extends SvelteComponentTyped<GiInkSwirlProps, GiInkSwirlEvents, GiInkSwirlSlots> {
}
export {};
