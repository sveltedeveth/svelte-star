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
export type GiUnionJackProps = typeof __propDef.props;
export type GiUnionJackEvents = typeof __propDef.events;
export type GiUnionJackSlots = typeof __propDef.slots;
export default class GiUnionJack extends SvelteComponentTyped<GiUnionJackProps, GiUnionJackEvents, GiUnionJackSlots> {
}
export {};
