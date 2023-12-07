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
export type GiSausageProps = typeof __propDef.props;
export type GiSausageEvents = typeof __propDef.events;
export type GiSausageSlots = typeof __propDef.slots;
export default class GiSausage extends SvelteComponentTyped<GiSausageProps, GiSausageEvents, GiSausageSlots> {
}
export {};
