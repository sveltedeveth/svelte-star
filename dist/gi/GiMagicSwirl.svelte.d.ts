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
export type GiMagicSwirlProps = typeof __propDef.props;
export type GiMagicSwirlEvents = typeof __propDef.events;
export type GiMagicSwirlSlots = typeof __propDef.slots;
export default class GiMagicSwirl extends SvelteComponentTyped<GiMagicSwirlProps, GiMagicSwirlEvents, GiMagicSwirlSlots> {
}
export {};
