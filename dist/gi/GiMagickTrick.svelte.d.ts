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
export type GiMagickTrickProps = typeof __propDef.props;
export type GiMagickTrickEvents = typeof __propDef.events;
export type GiMagickTrickSlots = typeof __propDef.slots;
export default class GiMagickTrick extends SvelteComponentTyped<GiMagickTrickProps, GiMagickTrickEvents, GiMagickTrickSlots> {
}
export {};
