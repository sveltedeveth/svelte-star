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
export type TiSocialTumblerProps = typeof __propDef.props;
export type TiSocialTumblerEvents = typeof __propDef.events;
export type TiSocialTumblerSlots = typeof __propDef.slots;
export default class TiSocialTumbler extends SvelteComponentTyped<TiSocialTumblerProps, TiSocialTumblerEvents, TiSocialTumblerSlots> {
}
export {};
