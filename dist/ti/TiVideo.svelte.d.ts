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
export type TiVideoProps = typeof __propDef.props;
export type TiVideoEvents = typeof __propDef.events;
export type TiVideoSlots = typeof __propDef.slots;
export default class TiVideo extends SvelteComponentTyped<TiVideoProps, TiVideoEvents, TiVideoSlots> {
}
export {};
