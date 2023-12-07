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
export type GiUmbrellaProps = typeof __propDef.props;
export type GiUmbrellaEvents = typeof __propDef.events;
export type GiUmbrellaSlots = typeof __propDef.slots;
export default class GiUmbrella extends SvelteComponentTyped<GiUmbrellaProps, GiUmbrellaEvents, GiUmbrellaSlots> {
}
export {};
