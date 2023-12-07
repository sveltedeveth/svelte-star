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
export type GiFlyingFoxProps = typeof __propDef.props;
export type GiFlyingFoxEvents = typeof __propDef.events;
export type GiFlyingFoxSlots = typeof __propDef.slots;
export default class GiFlyingFox extends SvelteComponentTyped<GiFlyingFoxProps, GiFlyingFoxEvents, GiFlyingFoxSlots> {
}
export {};
