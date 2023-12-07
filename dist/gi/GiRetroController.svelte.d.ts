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
export type GiRetroControllerProps = typeof __propDef.props;
export type GiRetroControllerEvents = typeof __propDef.events;
export type GiRetroControllerSlots = typeof __propDef.slots;
export default class GiRetroController extends SvelteComponentTyped<GiRetroControllerProps, GiRetroControllerEvents, GiRetroControllerSlots> {
}
export {};
