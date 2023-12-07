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
export type GiMagicPalmProps = typeof __propDef.props;
export type GiMagicPalmEvents = typeof __propDef.events;
export type GiMagicPalmSlots = typeof __propDef.slots;
export default class GiMagicPalm extends SvelteComponentTyped<GiMagicPalmProps, GiMagicPalmEvents, GiMagicPalmSlots> {
}
export {};
