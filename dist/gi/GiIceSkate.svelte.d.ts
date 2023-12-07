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
export type GiIceSkateProps = typeof __propDef.props;
export type GiIceSkateEvents = typeof __propDef.events;
export type GiIceSkateSlots = typeof __propDef.slots;
export default class GiIceSkate extends SvelteComponentTyped<GiIceSkateProps, GiIceSkateEvents, GiIceSkateSlots> {
}
export {};
