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
export type GoLinkExternalProps = typeof __propDef.props;
export type GoLinkExternalEvents = typeof __propDef.events;
export type GoLinkExternalSlots = typeof __propDef.slots;
export default class GoLinkExternal extends SvelteComponentTyped<GoLinkExternalProps, GoLinkExternalEvents, GoLinkExternalSlots> {
}
export {};
