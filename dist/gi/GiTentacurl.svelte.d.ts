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
export type GiTentacurlProps = typeof __propDef.props;
export type GiTentacurlEvents = typeof __propDef.events;
export type GiTentacurlSlots = typeof __propDef.slots;
export default class GiTentacurl extends SvelteComponentTyped<GiTentacurlProps, GiTentacurlEvents, GiTentacurlSlots> {
}
export {};
