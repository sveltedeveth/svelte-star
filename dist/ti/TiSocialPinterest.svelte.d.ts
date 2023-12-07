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
export type TiSocialPinterestProps = typeof __propDef.props;
export type TiSocialPinterestEvents = typeof __propDef.events;
export type TiSocialPinterestSlots = typeof __propDef.slots;
export default class TiSocialPinterest extends SvelteComponentTyped<TiSocialPinterestProps, TiSocialPinterestEvents, TiSocialPinterestSlots> {
}
export {};
