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
export type TiSocialLastFmProps = typeof __propDef.props;
export type TiSocialLastFmEvents = typeof __propDef.events;
export type TiSocialLastFmSlots = typeof __propDef.slots;
export default class TiSocialLastFm extends SvelteComponentTyped<TiSocialLastFmProps, TiSocialLastFmEvents, TiSocialLastFmSlots> {
}
export {};
