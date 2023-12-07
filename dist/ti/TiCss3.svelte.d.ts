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
export type TiCss3Props = typeof __propDef.props;
export type TiCss3Events = typeof __propDef.events;
export type TiCss3Slots = typeof __propDef.slots;
export default class TiCss3 extends SvelteComponentTyped<TiCss3Props, TiCss3Events, TiCss3Slots> {
}
export {};
