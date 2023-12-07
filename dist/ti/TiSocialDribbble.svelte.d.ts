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
export type TiSocialDribbbleProps = typeof __propDef.props;
export type TiSocialDribbbleEvents = typeof __propDef.events;
export type TiSocialDribbbleSlots = typeof __propDef.slots;
export default class TiSocialDribbble extends SvelteComponentTyped<TiSocialDribbbleProps, TiSocialDribbbleEvents, TiSocialDribbbleSlots> {
}
export {};
